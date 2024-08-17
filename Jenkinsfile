pipeline {
    agent none
    environment {
        NX_BRANCH = env.BRANCH_NAME.replace('PR-', '')
        NX_BASE = "origin/${env.CHANGE_TARGET}"
    }
    stages {
        stage('Pipeline') {
            parallel {
                stage('Main') {
                    when {
                        branch 'main'
                    }
                    agent any
                    steps {
                        nodejs('NodeJS-18') {
                            // This line enables distribution
                            // The "--stop-agents-after" is optional, but allows idle agents to shut down once the "e2e-ci" targets have been requested
                            // sh "npx nx-cloud start-ci-run --distribute-on='3 linux-medium-js' --stop-agents-after='e2e-ci'"
                            sh "pnpm install"
                            // sh "npx nx-cloud record -- nx format:check"
                            sh "npx nx affected --base=HEAD~1 -t lint test build"
                        }
                    }
                }
                stage('PR') {
                    when {
                        not { branch 'main' }
                    }
                    agent any
                    steps {
                        nodejs('NodeJS-18') {
                            echo NX_BRANCH
                            echo NX_BASE
                            // This line enables distribution
                            // The "--stop-agents-after" is optional, but allows idle agents to shut down once the "e2e-ci" targets have been requested
                            // sh "npx nx-cloud start-ci-run --distribute-on='3 linux-medium-js' --stop-agents-after='e2e-ci'"
                            sh "pnpm install"
                            // sh "npx nx-cloud record -- nx format:check"
                            sh "npx nx affected -t lint test build"
                        }
                    }
                }
            }
        }
    }
}
