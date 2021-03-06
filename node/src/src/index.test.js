const expect = require('expect');
const { logger } = require('../../logger');

const { enfProvider } = require('./');

describe('ENF SOAP service', () => {
    describe('searchAccount method with login', () => {
        const enfService = new enfProvider(logger);

        it('it should return the informations using the username', async () => {
            try {
                const user = await enfService.searchAccount({
                    uuid: null,
                    username: 'florence.vitalis',
                });
                expect(user).toEqual({
                    user_civilite: '2',
                    user_nom: 'VITALIS',
                    user_prenom: 'Florence',
                    user_date_naissance: '27/03/1969',
                    user_ville: 'NICE',
                    user_mail_personnel: 'flovitalis@free.fr',
                    user_telephone_personnel: '+33 1 01 01 01 00',
                    user_enf_login: 'florence.vitalis',
                    user_enf_identifiant: '532a9dc89e91d6.42190758PER',
                    user_enf_profil: 'personnel',
                    user_enf_mail: 'florence.vitalis@lecnam.net',
                    user_enf_enseignant_vacataire: 'false',
                    user_enf_enseignant_permanent: 'false',
                    user_enf_administratif: 'true',
                    user_enf_centre_inscripteur: 'par',
                });
            } catch (error) {
                expect(error.message).toEqual(
                    'searchAccount method is not yet implemented with the soap ws',
                );
            }
        });
    });

    describe('searchAccount method with uid', () => {
        const enfService = new enfProvider(logger);

        it('it should return the informations using the uuid', async () => {
            try {
                const user = await enfService.searchAccount({
                    uuid: '532a9dc89e91d6.42190758PER',
                    username: null,
                });
                expect(user).toEqual({
                    user_civilite: '2',
                    user_nom: 'VITALIS',
                    user_prenom: 'Florence',
                    user_date_naissance: '27/03/1969',
                    user_ville: 'NICE',
                    user_mail_personnel: 'flovitalis@free.fr',
                    user_telephone_personnel: '+33 1 01 01 01 00',
                    user_enf_login: 'florence.vitalis',
                    user_enf_identifiant: '532a9dc89e91d6.42190758PER',
                    user_enf_profil: 'personnel',
                    user_enf_mail: 'florence.vitalis@lecnam.net',
                    user_enf_enseignant_vacataire: 'false',
                    user_enf_enseignant_permanent: 'false',
                    user_enf_administratif: 'true',
                    user_enf_centre_inscripteur: 'par',
                });
            } catch (error) {
                expect(error.message).toEqual(
                    'searchAccount method is not yet implemented with the soap ws',
                );
            }
        });
    });

    describe('createAccount method with empty data', () => {
        const enfService = new enfProvider(logger);

        it('it should return an information message about the values needed for account creation', async () => {
            try {
                const user = await enfService.createAccount({
                    lastName: null,
                    firstName: null,
                    birthDate: null,
                    email: null,
                });
                expect(user).toEqual({
                    return: {
                        user_return_code: '-1',
                        user_return_message:
                            "[ Il est nécessaire de renseigner un des groupes d'informations suivants pour effectuer un traitement quelconque : nom - prenom - dateNaissance - enfProfil / enfLogin - enfProfil / enfUid ][ Le traitement a été interrompu car une erreur de formatage a été detectée sur les paramètres suivants :  ]",
                        userEnfData: null,
                        userPleiadData: null,
                        userMoodleData: null,
                    },
                });
            } catch (error) {
                expect(error.message).toEqual(
                    "[ Il est nécessaire de renseigner un des groupes d'informations suivants pour effectuer un traitement quelconque : nom - prenom - dateNaissance - enfProfil / enfLogin - enfProfil / enfUid ][ Le traitement a été interrompu car une erreur de formatage a été detectée sur les paramètres suivants :  ]",
                );
            }
        });
    });

    describe('createAccount method with generic data', () => {
        const enfService = new enfProvider(logger);

        it('it should return the ENF ID', async () => {
            try {
                const user = await enfService.createAccount({
                    lastName: 'TESTOREAA',
                    firstName: 'TESTOREAA',
                    birthDate: '01/01/1978',
                    email: 'crisis7@free.fr',
                });
                expect(user).toEqual('5b0d363a889693.27176837HEB');
            } catch (error) {
                expect(error.message).toEqual(
                    'createAccount method is not yet implemented with the soap ws',
                );
            }
        });
    });
});
