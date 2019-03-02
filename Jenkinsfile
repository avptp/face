def project = 'face'
def namespace = 'avptp'

def dockerHost = 'docker.avptp.org'
def dockerCredentials = 'docker-server'
def registryHost = 'registry.avptp.org'
def registryCredentials = 'docker-registry'

def getPodLabel() {
  return "jenkins-agent-${UUID.randomUUID().toString()}"
}

def baseTemplate(body) {
  def label = getPodLabel();

  podTemplate(label: label, serviceAccount: 'jenkins', containers: [
    containerTemplate(
      name: 'docker',
      image: "docker:18.09.3",
      command: 'cat',
      ttyEnabled: true,
    ),
    containerTemplate(
      name: 'helm',
      image: "lachlanevenson/k8s-helm:v2.13.0",
      command: 'cat',
      ttyEnabled: true
    ),
    containerTemplate(
      name: 'kubectl',
      image: "lachlanevenson/k8s-kubectl:v1.13.4",
      command: 'cat',
      ttyEnabled: true
    )
  ]) {
    node(label) {
      body()
    }
  }
}

baseTemplate() {
  def build;
  def image;
  def environment;

  stage('Checkout') {
    checkout scm

    build = sh(
      script: 'printf $(git rev-parse --short HEAD)',
      returnStdout: true
    )

    image = "${registryHost}/${project}:${build}"

    environment = env.BRANCH_NAME == 'master' ? 'production' : 'staging'
  }

  stage('Build') {
    container('docker') {
      docker.withServer("tcp://${dockerHost}:2376", dockerCredentials) {
        docker.withRegistry("https://${registryHost}", registryCredentials) {
          sh "docker build -t ${image} ."
          sh "docker push ${image}"
        }
      }
    }
  }

  stage('Deploy') {
    if (env.BRANCH_NAME in ['master', 'develop']) {
      def manifests = 'chart/manifests.yaml';

      container('helm') {
        withCredentials([usernamePassword(
          credentialsId: registryCredentials,
          usernameVariable: 'registryUsername',
          passwordVariable: 'registryPassword',
        )]) {
          sh """
            helm template chart \
              --name ${project} \
              --namespace=${namespace} \
              -f chart/values.${environment}.yaml \
              --set-string image.tag=${build} \
              --set-string registry.credentials.username=${registryUsername} \
              --set-string registry.credentials.password=${registryPassword} \
            > ${manifests}
          """
        }
      }

      container('kubectl') {
        withKubeConfig([credentialsId: "kubernetes-${environment}"]) {
          sh "cat ${manifests} | kubectl apply -f -"
        }
      }
    }
  }
}
