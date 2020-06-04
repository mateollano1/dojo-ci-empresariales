pipeline {
  agent {
    node {
      label 'app'
    }

  }
  stages {
    stage('Build') {
      steps {
        echo 'init build'
        sh 'npm install'
        sh 'npm test'
      }
    }

  }
  environment {
    nodejs = 'nodejs'
  }
}