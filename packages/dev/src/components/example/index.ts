export const ExampleList = [
  {
    key: 'sample1',
    label: 'sample1',
    component: () => import('@/components/example/example-sample1/ExampleApp.vue')
  }
];
export const ExampleApps = (() => {
  const hash: any = {};
  ExampleList.forEach(example => {
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
