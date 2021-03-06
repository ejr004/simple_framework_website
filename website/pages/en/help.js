/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : ''}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

  const supportLinks = [
    {
      content: `Learn more using the [documentation on this site.](${docUrl(
        'deployment_guide_htcondor.html',
      )}) or read up our [CERN TWiki page](https://twiki.cern.ch/twiki/bin/view/LCG/SIMPLEGridProject) to get more insights into the project`,
      title: 'Browse Docs',
    },
    {
      content: `Ask questions about the project on [Slack]('https://join.slack.com/t/simple-framework/shared_invite/enQtODE4NzY2MTk2OTY0LWZmNjQ0NThmNDRiMzc1YTUxMzU3MTNjOGU4YWRlN2E0MzI5NjQ3ZDNjMDkxYjYzMjdkZGQyNzJjNmMwNzlmNWY'), [Google Groups](https://groups.google.com/forum/#!forum/wlcg-lightweight-sites) or [E-Groups](https://e-groups.cern.ch/e-groups/Egroup.do?egroupId=10285344)`,
      title: 'Join the community',
    },
    {
      content: "Find out what's new with supported services you are interested in. Check out our [GitHub Organization](https://github.com/simple-framework)",
      title: 'Stay up to date',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>This project is maintained by a dedicated group of people.</p>
          <p>If none of the options listed below suit you, drop a line with your query/suggestion to mayank [dot] sharma [at] cern [dot] ch.</p>

          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
