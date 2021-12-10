# poclongcache

This app builder app demonstrates the difference between using aio-lib-state to cache a 2kb string vs using the params of the action directly.

## Tests and timing


### usecache
```
  ➜  loadtest https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/usecache  -n 500 -c 100
  Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
  Requests: 276 (55%), requests per second: 55, mean latency: 1239.9 ms
  Requests: 497 (99%), requests per second: 44, mean latency: 1705.7 ms
  
  Target URL:          https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/usecache
  Max requests:        500
  Concurrency level:   100
  Agent:               none
  
  Completed requests:  500
  Total errors:        0
  Total time:          11.251721275 s
  Requests per second: 44
  Mean latency:        1487.6 ms
  
  Percentage of the requests served within a certain time
    50%      688 ms
    90%      3601 ms
    95%      4751 ms
    99%      7868 ms
   100%      11221 ms (longest request)
```

### useparams

```
  ➜  loadtest https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/useparams  -n 500 -c 100
  Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
  
  Target URL:          https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/useparams
  Max requests:        500
  Concurrency level:   100
  Agent:               none
  
  Completed requests:  500
  Total errors:        0
  Total time:          2.250666207 s
  Requests per second: 222
  Mean latency:        385.9 ms
  
  Percentage of the requests served within a certain time
    50%      359 ms
    90%      518 ms
    95%      557 ms
    99%      730 ms
   100%      755 ms (longest request)
```

## Deploy & Cleanup

- `aio app deploy` to build and deploy all actions on Runtime and static files to CDN
- `aio app undeploy` to undeploy the app

