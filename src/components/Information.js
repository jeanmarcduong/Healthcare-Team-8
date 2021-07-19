import React from 'react';

import InfoCSS from './Information.module.css';

const Information = () => {
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <div className={InfoCSS.row}>
        <div className={InfoCSS.column}>
          <h2>What is BlockChain?</h2>
          <p>
            At its core, blockchain is a distributed digital ledger that stores
            data of any kind. A blockchain can record information about
            cryptocurrency transactions, NFT ownership or DeFi smart contracts.
            While any conventional database can store this sort of information,
            blockchain is unique in that it’s totally decentralized. Rather than
            being maintained in one location, by a centralized
            administrator—think of an Excel spreadsheet or a bank database—many
            identical copies of a blockchain database are held on multiple
            computers spread out across a network. These individual computers
            are referred to as nodes.
          </p>
        </div>
        <div className={InfoCSS.column}>
          <h2>Benefits</h2>
          <p>
            Some of the benefits to blockchain include reduced costs, better
            transparency, improved speed and efficiency, and security.
          </p>
          <p>
            Blockchain technology utilizes advanced security compared to other
            platforms or record-keeping systems. Any transactions that are ever
            recorded needs to be agreed upon according to the consensus method.
            Also, each transaction is encrypted and has a proper link to the old
            transaction using a hashing method. Security is also enhanced by the
            fact that each node holds a copy of the transactions ever performed
            on the network. So, if any malicious actor ever wanted to make
            changes in the transaction, he won’t be able to do so as other nodes
            will reject his request to write transactions to the network.
            Blockchain networks are also immutable, which means the data, once
            written, cannot be reverted by any means. This is also the right
            choice for systems that thrive on immutable data, such as systems
            that citizens age.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Information;
