module.exports = {
  docs: [
    {
      type: "category",
      label: "Docs",
      items: [
        "setup",
        {
          type: "category",
          label: "Basics",
          collapsed: true,
          items: [
            "basics/gs",
            "basics/list-tuple-dict",
            "basics/flow-control",
            "basics/loop",
            "basics/function",
            "basics/class",
            "basics/file-io",
          ],
        },
        {
          type: "category",
          label: "Visualization",
          collapsed: true,
          items: [
            "matplotlib/basic-plotting",
            "matplotlib/subplot",
            "matplotlib/two-y-axes",
            "matplotlib/histogram",
            "matplotlib/contour-plot",
            "matplotlib/image-plot",
            "matplotlib/function-plot",
            "matplotlib/inset-zoom",
            "matplotlib/interactive-plots",
            "matplotlib/3d-sph",
            "matplotlib/3d-vol",
            "matplotlib/geo-plot",
            "matplotlib/mpl-customizations",
            "matplotlib/custom-colormap",
          ],
        },
        {
          type: "category",
          label: "numpy",
          collapsed: true,
          items: [
            "numpy/numpy-basics",
            "numpy/linear-algebra",
          ],
        },
        {
          type: "category",
          label: "scipy",
          collapsed: true,
          items: [
            "scipy/integration",
            "scipy/curve-fitting",
            "scipy/convolution",
          ],
        },
        "pandas",
        "multiprocessing",
        "sql-database",
        {
          type: "category",
          label: "Webapps",
          collapsed: true,
          items: [
            "django/webapp",
            "django/today-app",
            "django/todo-app",
            "django/airline",
            "django/learning-log",
          ],
        },
        "misc",
        "resources",
        "license",
      ],
    },
  ],
};
