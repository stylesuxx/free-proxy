const { expect } = require('chai');
const ProxyList = require('../../lib/proxyist');

const proxyList = new ProxyList();

describe('ProxyList', () => {
  it('should be an object', () => {
    expect(proxyList).to.be.an('object');
  });
});

describe('.get()', function () {
  this.timeout(60000);
  it('should return a list of proxies', async function () {
    const proxies = await proxyList.get();
    expect(proxies).to.be.an('array');
    expect(proxies.length).to.be.gt(0);
  });
});

describe('.random()', function () {
  this.timeout(60000);
  it('should return two different proxy items', async function () {
    const data1 = await proxyList.random();
    const data2 = await proxyList.random();
    expect(data1).to.be.not.eql(data2);
  });
});

describe('.randomFromCache()', function () {
  this.timeout(60000);
  it('should return two different proxy items', async function () {
    const data1 = await proxyList.randomFromCache();
    const length1 = proxyList.cached.length;
    const data2 = await proxyList.randomFromCache();
    const length2 = proxyList.cached.length;
    expect(data1).to.be.not.eql(data2);
    expect(length1).to.be.eql(length2 + 1);
  });
});
