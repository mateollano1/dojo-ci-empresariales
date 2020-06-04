pipeline {
  agent {
    node {
      label 'nodejs'
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