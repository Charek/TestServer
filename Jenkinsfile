pipeline {
  agent any
    
  tools {nodejs "/usr/bin/node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git branch: 'main',
        url: 'https://github.com/charek/TestServer.git'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm start'
         sh 'npm test'
      }
    }      
  }
}

