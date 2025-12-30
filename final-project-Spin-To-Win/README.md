# Spin To Win - Game on CKB

A decentralized spin-to-win game built on the CKB blockchain. Players can spin the wheel to win CKB tokens, with automatic payouts handled by smart contracts.

## 🎮 Game Overview

Spin To Win is an interactive blockchain game where players:
- Connect their CKB wallet
- Place bets by spinning a colorful wheel
- Win CKB tokens based on where the wheel lands
- Receive automatic payouts to their wallet

## 🏗️ Architecture

The project consists of two main components:

### Frontend (React + TypeScript)
- Built with React, TypeScript, and Vite
- Styled with Tailwind CSS
- Uses CCC (CKb-Connectivity-Client) for wallet integration
- Responsive design with smooth animations

### Backend (Node.js + Express)
- RESTful API server
- Handles payout transactions
- Manages house wallet and balance
- Provides game configuration

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- CKB wallet (JoyID, Spore, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/spin-to-win-ckb.git
   cd spin-to-win-ckb
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Environment Setup

1. **Frontend Environment Variables**
   Create `frontend/.env`:
   ```env
   VITE_GAME_ADDRESS=your_game_address_here
   VITE_API_BASE=http://localhost:3000
   VITE_PAYOUT_API_KEY=your_payout_api_key
   ```

2. **Backend Environment Variables**
   Create `backend/.env`:
   ```env
   PRIVATE_KEY=your_house_wallet_private_key
   HOUSE_ADDRESS=your_house_wallet_address
   RPC_URL=https://testnet.ckb.dev/rpc
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Play

1. **Connect Your Wallet**
   - Click "Connect Wallet" button
   - Choose your preferred CKB wallet
   - Approve the connection

2. **Spin the Wheel**
   - Click the "Spin" button to place a bet
   - Watch the wheel spin and land on a segment
   - Win amounts vary from 0 to 1000 CKB

3. **Receive Winnings**
   - Automatic payout to your wallet
   - Transaction hash provided for verification

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **@ckb-ccc/connector-react** - CKB wallet integration

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **@ckb-ccc/core** - CKB blockchain interaction
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📦 Project Structure

```
spin-to-win-ckb/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── SpinWheel.tsx    # Main game component
│   │   │   └── ...
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # App entry point
│   ├── public/              # Static assets
│   ├── .env.example         # Environment variables template
│   └── package.json         # Frontend dependencies
├── backend/                 # Node.js backend server
│   ├── index.js             # Main server file
│   ├── .env.example         # Environment variables template
│   └── package.json         # Backend dependencies
└── README.md               # This file
```

## 🔧 Configuration

### Game Configuration
The wheel segments and probabilities can be configured in `frontend/src/components/SpinWheel.tsx`:

```typescript
const SEGMENTS = [
    { label: '1000 CKB', value: 1000, color: '#10b981', probability: 0.05 },
    { label: '500 CKB', value: 500, color: '#3b82f6', probability: 0.10 },
    { label: '100 CKB', value: 100, color: '#facc15', probability: 0.25 },
    { label: 'EMPTY', value: 0, color: '#ef4444', probability: 0.299 },
    { label: '50 CKB', value: 50, color: '#a855f7', probability: 0.15 },
    { label: '25 CKB', value: 25, color: '#f97316', probability: 0.15 },
    { label: '10 CKB', value: 10, color: '#06b6d4', probability: 0.001 }
];
```

### API Endpoints

#### GET `/api/house`
Returns the house wallet address and balance.

#### POST `/api/payout`
Processes payout transactions.
- **Body**: `{ toAddress: string, amountCkb: number, betTxHash: string }`
- **Headers**: `{ 'Content-Type': 'application/json', 'x-api-key': string }`

## 🌐 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `VITE_GAME_ADDRESS`
   - `VITE_API_BASE` (backend URL)
   - `VITE_PAYOUT_API_KEY`
3. Deploy automatically on push to main branch

### Backend (Vercel)
1. Create a separate Vercel project for the backend
2. Set environment variables:
   - `PRIVATE_KEY`
   - `HOUSE_ADDRESS`
   - `RPC_URL`
3. Deploy the Express server as a serverless function

## 🧪 Testing

### Running Tests
```bash
# Frontend linting
cd frontend
npm run lint

# Build frontend
npm run build
```

### Local Testing
1. Ensure both frontend and backend are running
2. Connect a test wallet (JoyID recommended)
3. Test with CKB testnet tokens

## 🔒 Security Considerations

- Private keys are stored in environment variables
- API endpoints are protected with API keys
- All transactions are validated on-chain
- CORS is configured for allowed origins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [CKB](https://github.com/nervosnetwork/ckb) - The blockchain platform
- [CCC](https://github.com/ckb-ccc/ccc) - CKB connectivity client
- [JoyID](https://www.joy.id/) - CKB wallet provider
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Join our Discord community - (https://discord.gg/yAd9XXBKSf)

---

**Disclaimer**: This is a demo project for educational purposes. Please use responsibly and at your own risk.
