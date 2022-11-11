let proxy = new Proxy(
  {},
  {
    get: (obj, property) => {
      if (property === '__esModule') {
        return {}
      }

      throw new Error(
        `You\'re trying to import \`@wellness-icons/react/outline/${property}\` from wellnes-icons v1 but have installed WellnessIcons v2. Install \`@wellness-icons/react@v1\` to resolve this error.`
      )
    },
  }
)

module.exports = proxy
