pipeline {
  agent any
    
  tools {nodejs "/usr/bin/node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/charek/TestServer'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}

