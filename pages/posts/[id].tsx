import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostWithContent } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

interface PostProps {
  postData: PostWithContent & {
    mdxSource: MDXRemoteSerializeResult;
  };
}

const components = {
  // Custom components can be added here
  // For example: Button: CustomButton, etc.
}

export default function Post({ postData }: PostProps) {
  const excerpt = postData.content.replace(/[#*`_\[\]()]/g, '').substring(0, 160);
  const canonicalUrl = `https://kavenkim.com/posts/${postData.id}`;
  const ogImage = `https://kavenkim.com/api/og?title=${encodeURIComponent(postData.title)}`;

  return (
    <Layout>
      <Head>
        <title>{postData.title} - Kaven Kim Blog</title>
        <meta name="description" content={excerpt} />

        {/* Open Graph */}
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:article:published_time" content={postData.date} />
        <meta property="og:article:author" content="Kaven Kim" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: postData.title,
            datePublished: postData.date,
            author: {
              '@type': 'Person',
              name: 'Kaven Kim',
              url: 'https://kavenkim.com',
            },
            publisher: {
              '@type': 'Person',
              name: 'Kaven Kim',
            },
            url: canonicalUrl,
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': canonicalUrl,
            },
          }),
        }}
      />

      <article>
        <h1 className="site-heading-xl">{postData.title}</h1>
        <div className="site-light-text">
          <Date dateString={postData.date} />
        </div>
        <div>
          <MDXRemote {...postData.mdxSource} components={components} />
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<PostProps, { id: string }> = async ({ params }) => {
  const postData = await getPostData(params!.id)
  const mdxSource = await serialize(postData.content)
  
  return {
    props: {
      postData: {
        ...postData,
        mdxSource
      }
    }
  }
}