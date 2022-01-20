const { MemoryStore } = require('express-session');
const session = require('express-session')
const Keycloak = require('keycloak-connect')

let keycloak;

const keycloakConfig = {}

const initKeycloak = () => {
    if (keycloak) {
        return keycloak
    } else {
        const memoryStore = new session.MemoryStore()
        keycloak = new Keycloak({ store: memoryStore }, keycloakConfig)
        return keycloak
    }
}

const getKeycloak = () => {
    return keycloak
}

module.exports = {
    initKeycloak,
    getKeycloak
}