export const ExampleList = [
  {
    key: 'temp',
    label: 'temp',
    component: () => import('@/components/example/example-temp/ExampleApp.vue'),
  },
];
export const ExampleApps = (() => {
  const hash: any = {};
  ExampleList.forEach((example) => {
    hash[example.key] = example;
  });
  return hash;
})();

export const exampleLinks = (() => {
  const links = [];
  for (const key in ExampleApps) {
    const example = (ExampleApps as any)[key];
    links.push({ to: `/example/${key}`, label: example.label });
  }
  return links;
})();
