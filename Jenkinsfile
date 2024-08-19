pipeline {
    agent none
    environment {
        NX_BRANCH = env.BRANCH_NAME.replace('PR-', '')
    }
    stages {
        stage('Pipeline') {
            parallel {
                stage('Main') {
                    when {
                        branch 'main'
                    }
                    agent {
                        label 'docker-agent'
                    }
                    steps {
                        nodejs('NodeJS-18') {
                            sh "pnpm install"
                            sh "npx nx affected --base=HEAD~1 -t lint test build"
                        }
                    }
                }
                stage('Dev') {
                    when {
                        branch 'dev'
                    }
                    agent {
                        label 'docker-agent'
                    }
                    steps {
                        nodejs('NodeJS-18') {
                            sh "pnpm install"
                            sh "npx nx affected --base=HEAD~1 -t lint test build"
                        }
                    }
                }
                stage('PR') {
                    when {
                        not { branch 'main' }
                        not { branch 'dev' }
                    }
                    agent {
                        label 'docker-agent'
                    }
                    steps {
                        script {
                            if (env.CHANGE_TARGET == 'main' || env.CHANGE_TARGET == 'dev') {
                                nodejs('NodeJS-18') {
                                    sh "git fetch origin ${env.CHANGE_TARGET}:${env.CHANGE_TARGET}"
                                    sh "pnpm install"
                                    sh "npx nx affected --base ${env.CHANGE_TARGET} -t lint test build"
                                }
                            } else {
                                echo "Target branch is not 'main' or 'dev', skipping affected commands."
                            }
                        }
                    }
                }
            }
        }
    }
}
