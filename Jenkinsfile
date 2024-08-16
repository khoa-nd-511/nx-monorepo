// pipeline {
//     agent none
//     environment {
//         NX_BRANCH = env.BRANCH_NAME.replace('PR-', '')
//     }
//     stages {
//         stage('Pipeline') {
//             parallel {
//                 stage('Main') {
//                     when {
//                         branch 'main'
//                     }
//                     agent any
//                     steps {
//                         nodejs('NodeJS-18') {
//                             // This line enables distribution
//                             // The "--stop-agents-after" is optional, but allows idle agents to shut down once the "e2e-ci" targets have been requested
//                             // sh "npx nx-cloud start-ci-run --distribute-on='3 linux-medium-js' --stop-agents-after='e2e-ci'"
//                             sh "pnpm install"
//                             // sh "npx nx-cloud record -- nx format:check"
//                             sh "npx nx affected --base=HEAD~1 -t lint test build"
//                         }
//                     }
//                 }
//                 stage('PR') {
//                     when {
//                         not { branch 'main' }
//                     }
//                     agent any
//                     steps {
//                         nodejs('NodeJS-18') {
//                             // This line enables distribution
//                             // The "--stop-agents-after" is optional, but allows idle agents to shut down once the "e2e-ci" targets have been requested
//                             // sh "npx nx-cloud start-ci-run --distribute-on='3 linux-medium-js' --stop-agents-after='e2e-ci'"
//                             sh "pnpm install"
//                             // sh "npx nx-cloud record -- nx format:check"
//                             sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t lint test build"
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }
pipeline {
    agent { 
        node {
            label 'docker-agent'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo "BRANCH_NAME: ${env.BRANCH_NAME}"
                echo "CHANGE_ID: ${env.CHANGE_ID}"
                echo "CHANGE_TARGET: ${env.CHANGE_TARGET}"
                echo "CHANGE_BRANCH: ${env.CHANGE_BRANCH}"
                echo "CHANGE_AUTHOR_EMAIL: ${env.CHANGE_AUTHOR_EMAIL}"
                echo "CHANGE_AUTHOR_DISPLAY_NAME: ${env.CHANGE_AUTHOR_DISPLAY_NAME}"
                echo "Building.."
                sh '''
                echo "doing build stuff.."
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                echo "doing test stuff.."
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo "Deliver...."
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}