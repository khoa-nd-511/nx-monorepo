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
            label 'docker-agent-alpine'
        }
    }
    stages {
        stage('Build') {
            steps {
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
                echo "doing test stuff..
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