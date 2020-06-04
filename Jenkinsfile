pipeline {
  agent any
  stages {
    stage('install') {
      steps {
        echo 'init build'
        sh 'npm install'
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}