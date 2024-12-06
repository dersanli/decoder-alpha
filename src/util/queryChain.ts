import * as ethers from 'ethers';
import abi from './contract-abi.json';

const rpcEndpoint = 'https://bsc-dataseed.bnbchain.org';
const contractAddress = '0xb2ea51BAa12C461327d12A2069d47b30e680b69D';
const walletAddress = '0x248Dd3836E2A8B56279C04addC2D11F3c2497836';

const provider = new ethers.JsonRpcProvider(rpcEndpoint);
const contract = new ethers.Contract(contractAddress, abi, provider);

export const getBalanceOfContract = async () => {
    try {
        const balance = await contract.balanceOf(walletAddress);
        return ethers.formatEther(balance);
    } catch (error) {
        console.error(error);
        throw error;
    }
};
