const config = {
  baseURL: 'https://sample-express.azurewebsites.net/',
  listDataUrl: 'api/cosmosdb/list',
  dataExtractionUrl: 'api/cosmosdb/detail?id=',
  dataAddUrl: 'api/cosmosdb/create?id=5&category=friend&name=鱗滝%20左近次',
  dataUppdateUrl: 'api/cosmosdb/update?id=5&category=friend&name=冨岡%20義勇',
  dataDeleteUrl: 'api/cosmosdb/delete?id=5&category=friend'
}

export default config;