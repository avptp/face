{{- define "image" }}
{{- printf "%s/%s:%s" .Values.registry.name .Values.image.name (default "latest" .Values.image.tag) }}
{{- end }}

{{- define "imagePullSecret" }}
{{- printf "{\"auths\": {\"%s\": {\"auth\": \"%s\"}}}" .Values.registry.name (printf "%s:%s" .Values.registry.credentials.username .Values.registry.credentials.password | b64enc) | b64enc }}
{{- end }}
