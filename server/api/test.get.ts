import { testGetFileUpgrade } from './up_utils'
export default defineEventHandler(async (event) => {

  // ... Do whatever you want here
  await testGetFileUpgrade()
  return 'v2_'+ Math.random().toString(36).substr(2, 4);
})