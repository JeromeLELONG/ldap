module.exports = {
    modify: (config, {target, dev}, webpack) => {
      // do something to config
      config.plugins.push(
        /**
         * IgnorePlugin will skip any require
         * that matches the following regex.
         */
        /*
         new webpack.IgnorePlugin(/react-data-grid/),
        new webpack.ProvidePlugin({
            'document': 'min-document',
            'self': 'node-noop',
            'self.navigator.userAgent': 'empty-string',
            'navigator.userAgent': 'empty-string',
            'window': 'node-noop',
            'window.location': 'node-noop'
        })
        */

    );
      return config
    }
  }