export const imports = {
  'src/lib/components/Alert/Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-lib-components-alert-alert" */ 'src/lib/components/Alert/Alert.mdx'),
}
