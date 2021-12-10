# poclongcache

This app builder app demonstrates the difference between using aio-lib-state to cache a 2kb string vs using the params of the action directly.

## Tests and timing

`loadtest https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/usecache  -n 500 -c 100`

  ➜  poc-longcache loadtest https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/usecache  -n 500 -c 100
  Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
  Requests: 100 (20%), requests per second: 20, mean latency: 2747.7 ms
  
  Target URL:          https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/usecache
  Max requests:        500
  Concurrency level:   100
  Agent:               none
  
  Completed requests:  500
  Total errors:        0
  Total time:          8.610041265 s
  Requests per second: 58
  Mean latency:        1571.7 ms
  
  Percentage of the requests served within a certain time
    50%      817 ms
    90%      4743 ms
    95%      5257 ms
    99%      5556 ms
   100%      6011 ms (longest request)

`loadtest https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/useparams  -n 500 -c 100`

  ➜  poc-longcache loadtest https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/useparams  -n 500 -c 100
  Requests: 0 (0%), requests per second: 0, mean latency: 0 ms
  
  Target URL:          https://52381-poclongcache-stage.adobeioruntime.net/api/v1/web/dx-excshell-1/useparams
  Max requests:        500
  Concurrency level:   100
  Agent:               none
  
  Completed requests:  500
  Total errors:        0
  Total time:          3.465723038 s
  Requests per second: 144
  Mean latency:        639.5 ms
  
  Percentage of the requests served within a certain time
    50%      395 ms
    90%      1631 ms
    95%      1690 ms
    99%      1714 ms
   100%      1730 ms (longest request)

## Deploy & Cleanup

- `aio app deploy` to build and deploy all actions on Runtime and static files to CDN
- `aio app undeploy` to undeploy the app

