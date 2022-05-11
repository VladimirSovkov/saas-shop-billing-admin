import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config : {
        url: environment.keycloakApiUrl,
        realm: 'saas-shop',
        clientId: 'saas-shop-admin-accountant'
      },
      loadUserProfileAtStartUp: true,
      initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: false
      },
      bearerExcludedUrls: []
    };

    return () => keycloak.init(options);
}
