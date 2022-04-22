import { KeycloakOptions, KeycloakService } from 'keycloak-angular';
import { environment } from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<boolean> {

    const options: KeycloakOptions = {
      config : {
        url: 'https://testvm.plotpad.ru:8443',
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
