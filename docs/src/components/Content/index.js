import React from 'react';
import { Title, Lead } from '../Text';

import * as styles from './Content.scss';
import ExampleMarkdown from './article.md';

export default class Content extends React.PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <header>
          <Title>Markdown Example</Title>
          <Lead>
            Created by <a href="https://github.com/mojombo">mojombo</a> on{' '}
            <a href="https://github.com/mojombo/github-flavored-markdown/issues/1">
              GitHub
            </a>
          </Lead>
        </header>
        <ExampleMarkdown />
      </div>
    );
  }
}
