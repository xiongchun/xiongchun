---
title: 基于 Lock4j 的分布式锁最佳实践
authors: [xiongchun]
tags: [服务端开发,盘古开发框架]
date: 2020-2-15
hide_table_of_contents: false
slug: pangu-dev-framework-distributed-lock
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[盘古开发框架](https://github.com/xiongchun/pangu-framework) 基于 [Lock4j](https://gitee.com/baomidou/lock4j) 提供分布式锁。支持注解声明式和 API 编程式对业务代码在分布式环境下加并发锁。

<!--truncate-->

## 安装相关盘古模块

<Tabs>
<TabItem value="parent" label="盘古 Parent">

```jsx
<parent>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-parent</artifactId>
	<version>latest.version.xxx</version>
	<relativePath/>
</parent>
```
</TabItem>
<TabItem value="dependency1" label="基础模块">

```jsx
<dependency>
    <groupId>com.gitee.pulanos.pangu</groupId>
    <artifactId>pangu-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
<TabItem value="dependency2" label="缓存模块">

```jsx
<dependency>
	<groupId>com.gitee.pulanos.pangu</groupId>
	<artifactId>pangu-cache-spring-boot-starter</artifactId>
</dependency>
```
</TabItem>
</Tabs>

## 本地配置

> 为便于理解，本文基于本地配置的方式编写。若改为标准的 Nacos 配置中心模式，请参阅：[配置中心](./pangu-dev-framework-configuration-center) 章节。

<Tabs defaultValue="application-dev">
<TabItem value="application" label="application.properties">

```jsx
spring.profiles.active=${spring.profiles.active:dev}
```
</TabItem>
<TabItem value="application-dev" label="application-dev.properties">

```jsx
spring.application.name=pangu-examples-lock-redis-based

# spring-redis
spring.redis.host=localhost
spring.redis.database=1
spring.redis.port=6379
spring.redis.password=

logging.level.root=INFO
logging.level.com.gitee.pulanos.pangu=INFO
```
</TabItem>
</Tabs>

## 基于注解声明
直接在需要缓存的方法上加上 `@Lock4j` 注解。

### @Lock4j
分布式锁注解。

名称 | 默认值 | 说明
--- | --- | ---
name | 空字符串 | 用于多个方法锁同一把锁 可以理解为锁资源名称，为空则会使用：包名 + 类名 + 方法名。（一般为空即可）
keys | 空字符串 | 支持 SPEL 表达式，锁的 key = name + keys
acquireTimeout | 3000 | 获取锁超时时间 单位：毫秒。可以理解为排队时常，超过这个时常就退出排队，抛出获取锁超时异常。
expire | 30000 | 过期时间 单位：毫秒。主要是防止死锁，建议估计好你锁方法运行时常，正常没有复杂业务的增删改查最多几秒，留有一定冗余，10 秒足够。默认 30 秒是为了兼容绝大部分场景。

### 代码片段
```jsx
/**
 * 默认获取锁超时 3 秒，30 秒锁过期
 */
@Lock4j
public void doBiz() {
	log.info("执行doBiz...");
	ThreadUtil.sleep(25*1000);
}

/**
 * 配置获取锁超时时间和锁过期时间 支持 SPEL
 * @param accountId
 */
@Lock4j(keys = {"#accountId"}, expire = 20000, acquireTimeout = 10000)
public void doBiz2(Long accountId) {
	log.info("执行doBiz2...");
	ThreadUtil.sleep(20*1000);
}
```

## 基于 API 编程
注入 LockTemplate 对象即可使用。如下代码所示。

```jsx
@Component
public class ApiLockService {

    @Autowired
    private LockTemplate lockTemplate;

    public void apiLock(String userId) {
        //... 各种不需要上锁的操作
        String lockKey = "lock4j:ApiLockService:apiLock:" + userId;
        final LockInfo lockInfo = lockTemplate.lock(lockKey);
        //申请锁失败
        if (null == lockInfo) {
            throw new LockException("业务处理中，请稍后再试...");
        }
        //申请锁成功
        try {
            ThreadUtil.sleep(10000L);
            log.info("执行 apiLock, 当前线程{}", Thread.currentThread().getName());
        } finally {
            lockTemplate.releaseLock(lockInfo);
        }
    }

}
```

## 本文相关范例源码
- [pangu-examples-lock-redis-based](https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-examples/pangu-examples-lock-redis-based)：分布式锁范例