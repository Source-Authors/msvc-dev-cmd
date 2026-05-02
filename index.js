import { setupMSVCDevCmd } from './lib'
import { getInput, setFailed } from '@actions/core'

function main() {
    var   arch    = getInput('arch')
    const sdk     = getInput('sdk')
    const toolset = getInput('toolset')
    const uwp     = getInput('uwp')
    const spectre = getInput('spectre')
    const vsversion = getInput('vsversion')

    setupMSVCDevCmd(arch, sdk, toolset, uwp, spectre, vsversion)
}

try {
    main()
}
catch (e) {
    setFailed('Could not setup Developer Command Prompt: ' + e.message)
}
