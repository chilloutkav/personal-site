import Layout from '../../components/layout'
import { getAllPostIds, getPostData, PostWithContent } from '../../lib/posts'
import SEOHead from '../../components/seo/SEOHead'
import StructuredData from '../../components/seo/StructuredData'
import { createBlogPostingSchema } from '../../lib/schema'
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

  return (
    <Layout>
      <SEOHead
        title={postData.title}
        description={excerpt}
        path={`/posts/${postData.id}`}
        ogType="article"
        publishedTime={postData.date}
        author="Kaven Kim"
      />

      <StructuredData data={createBlogPostingSchema(postData, canonicalUrl)} />

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