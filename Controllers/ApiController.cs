using System;
using System.Globalization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Caching.Distributed;

namespace VueSample.Controllers
{
    [Route("[controller]/test-cache")]
    public class ApiController : Controller
    {
        private readonly IDistributedCache _distributedCache;
        public ApiController(IDistributedCache distributedCache)
        {
            _distributedCache = distributedCache;
        }
        [Route("get/{cacheKey}")]
        public string Get(string cacheKey)
        {
            if (string.IsNullOrEmpty(cacheKey))
                return "Failed";

            var value = _distributedCache.GetString(cacheKey);
            if (!string.IsNullOrEmpty(value))
                return $"Fetched from cache : {value}";

            value = DateTime.UtcNow.ToString(CultureInfo.InvariantCulture);
            _distributedCache.SetString(cacheKey, value);
            return $"Added to cache: {value}";
        }

    }
}
