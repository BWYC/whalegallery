import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(1).png'
  },
  // Back
  {
    position: [-0.8, 0, -0.6],

    rotation: [0, 0, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(10).png'
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: 'https://bafybeidbezscopxvg2l2ectssgrtslbq53rpym7xahp7l7aykaklnfakua.ipfs.nftstorage.link/ipfs/bafybeidbezscopxvg2l2ectssgrtslbq53rpym7xahp7l7aykaklnfakua/dsaes.png'
  },
  // Left
  {
    position: [-1.75, 0, 0.25],
    rotation: [0, Math.PI / 2.5, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(109).png'
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(11).png'
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(111).png'
  },
  // Right
  {
    position: [1.75, 0, 0.25],
    rotation: [0, -Math.PI / 2.5, 0],
    url: 'https://bafybeihfp5jeky3c75xrnfkbxl3hudcxk46b63axc3tyqqrii4u4gdx2ca.ipfs.nftstorage.link/ipfs/bafybeihfp5jeky3c75xrnfkbxl3hudcxk46b63axc3tyqqrii4u4gdx2ca/wqqewew.png'
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(135).png'
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(112).png'
  },
  {
    position: [2, 0, 3.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: 'https://bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m.ipfs.nftstorage.link/ipfs/bafybeibww3urllxptzpctpt4nsd3lotafuq5v4tbwnqv3opgukxaofxn4m/z%20(112).png'
  }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
