# Qilin Store Web

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/qilin/store-web/issues)
[![Build Status](https://travis-ci.com/qilin/store-web.svg?branch=master)](https://travis-ci.com/qilin/store-web)

Qilin is an open-source digital distribution platform for game developers and publishers. Our mission is to distribute games by minimizing the effort of contracting, sharing documentation and providing comprehensive real-time statistics.

| |Qilin Frontend Schema|
|---|---|
|**API Backend**|[Store API](https://github.com/qilin/store-api) is the GraphQL API server for the Qilin Store.|
|**Storefront**|[Store Web](https://github.com/qilin/store-web) is the NextJS application for the Qilin Store.|
|**Frontend for Authentication**|[Store Auth Web](https://github.com/qilin/store-auth-web) is an authentication frontend application written in React for Qilin Store.|
|**Desktop Application**|[Store Launcher](https://github.com/qilin/store-launcher) is a Qilin Store desktop application launcher for Windows and MacOS.|
|**Javascript Library**|[Store Library](https://github.com/qilin/store-library) is a library with React components for the Qilin Store launchers.|

**Store Web** is an open-source digital video games multilingual storefront available via the web and the [launcher application](https://github.com/qilin/store-launcher).

## Features

- Players can purchase and update games.
- Add games to user's Wishlist.
- Download the desktop application for Windows and MacOS.
- Authorization through [Qilin Store Auth Web](https://github.com/qilin/store-auth-web).
- View and edit a user profile.

---

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- [Node.js 12.14.1](https://nodejs.org/en/) or later
- [Yarn](https://classic.yarnpkg.com/en/docs/install)

## Installation

```
yarn install
```

## Usage

Qilin Store Web built with the React framework [Next.js](https://nextjs.org/).

**Start Next.js in development mode:**

```
yarn dev
```

**Build the application for production usage:**

```
yarn build
```

**Start a Next.js production server:**

```
yarn start
```

## Contributing, Feature Requests and Support

If you like this project then you can put a ⭐ on it. It means a lot to us.

If you have an idea of how to improve Qilin (or any of the product parts) or have general feedback, you're welcome to submit a [feature request](../../issues/new?assignees=&labels=&template=feature_request.md&title=).

Chances are, you like what we have already but you may require a custom integration, a special license or something else big and specific to your needs. We're generally open to such conversations.

If you have a question and can't find the answer yourself, you can [raise an issue](../../issues/new?assignees=&labels=&template=support-request.md&title=I+have+a+question+about+%3Cthis+and+that%3E+%5BSupport%5D) and describe what exactly you're trying to do. We'll do our best to reply in a meaningful time.

Qilin welcomes contributions from anyone and everyone. Please refer to [our contribution guide to learn more](CONTRIBUTING.md).

## License

The project is available as open source under the terms of the [Apache-2.0 License](https://opensource.org/licenses/Apache-2.0).