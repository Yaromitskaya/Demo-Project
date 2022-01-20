pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key 8a1caa29-e733-4d1a-a1d0-9744e86cb26a --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key 8a1caa29-e733-4d1a-a1d0-9744e86cb26a --parallel'
                    }
                }
                stage('Run tests in parallel C') {
                    steps {
                        bat 'npx cypress run --record --key 8a1caa29-e733-4d1a-a1d0-9744e86cb26a --parallel'
                    }
                }
            }
        }
    }
}