# Orion Contracts

# Setup
1. yarn install
2. cp .env.example .env.dev => then add your test private key

# deploy
1. Create .env.dev from .env.example
2. Testing
    yarn hardhat test
3. Deploy
    yarn hardhat --network goerli run deploy/LaunchPool/deploy.ts

5. Verify    
    CONTRACT=LaunchPool yarn hardhat --network goerli run deploy/verify.ts
