pipeline {
    agent { docker { image 'node:10.16.1' } }
    stages {
        stage('build') {
            steps {
                sh 'yarn build'
            }
        }
    }
}
