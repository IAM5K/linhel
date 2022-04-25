<ol>
  <li>
    Dyanamic integration of google analytics through environment variable.
    `https://www.ngdevelop.tech/integrate-google-analytics-with-angular-angular-seo/`
  </li>
  <li>
    Add this to `main.ts` 
    `platformBrowserDynamic().bootstrapModule(AppModule).then(
      module => enableDebugTools(module.injector.get(ApplicationRef).components[0])
    );` 
    this enables a Change detection profiling option in chrome console in production mode.
    `ng.profiler.timeChangeDetection()` to measure duration of a change detection run (500ms or 5 change detection cycle)
  </li>
  <li>

  </li>
  <li>
  
  </li>
</ol>

### Supportive/Used Resource

<ol>
  <li>https://www.npmjs.com/package/source-map-explorer</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>

### Errors Faced and Resolved

<ol>
  <li>https://stackoverflow.com/questions/70401240/error-in-configuration-of-firebase-in-angular</li>
  <li>https://github.com/angular/angularfire/issues/3090</li>
  <li>https://stackoverflow.com/questions/67645151/angular-12-warns-about-requested-ie-11-support-why</li>
  <li></li>
  <li></li>
</ol>
