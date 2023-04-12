pipeline {
  agent any
    
  tools {nodejs "/usr/bin/node"}
    
  stages {
        
    stage('Clone repo') {
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
     
    
    stage('Start Server') {
      steps {
        sh 'npm start'
      }
    }
    
    stage('Test') {
      steps {
       
         sh 'npm test'
      }
    }      
  }
}

