import { setupTest, expectModuleToBeCalledWith, getNuxt } from '@nuxt/test-utils'

describe('My test', () => {
  setupTest({
    // test context options
  })

  it('it should call addPlugin', () => {
    expectModuleToBeCalledWith('addPlugin', {
      src: expect.stringContaining('templates/plugin.js'),
      ssr: false,
      options: getNuxt().options.microsoftClarity
    })
  })
})
