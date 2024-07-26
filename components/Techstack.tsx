import CssLogo from '../public/tech/CssLogo.svg'
import HtmlLogo from '../public/tech/HtmlLogo.svg'
import JsLogo from '../public/tech/JsLogo.svg'
import NodeLogo from '../public/tech/NodeLogo.svg'
import ReactLogo from '../public/tech/ReactLogo.svg'
import ExpressLogo from '../public/tech/ExpressLogo.svg'
import NextLogo from '../public/tech/NextLogo.svg'
import FirebaseLogo from '../public/tech/FirebaseLogo.svg'
import JavaLogo from '../public/tech/JavaLogo.svg'
import MongoLogo from '../public/tech/MongoLogo.svg'
import PostgresqlLogo from '../public/tech/PostgresqlLogo.svg'
import PythonLogo from '../public/tech/PythonLogo.svg'

const Techstack = () => {
  return (
    <div className='w-full'>
      <div className='h-44 w-full bg-gradient-to-b from-khaki to-white'></div>
      <div className='flex w-full flex-col items-center justify-center bg-white p-4'>
        <div className='text-center text-4xl'>
          <h1 className='pt-12 text-5xl font-extralight text-oxford'>
            Toolbox
          </h1>
        </div>
        <div className='grid grid-cols-6 items-center justify-items-center gap-20 pt-12 max-md:grid-cols-4 max-sm:grid-cols-3 max-xs:grid-cols-2'>
          <CssLogo width={64} height={64} />
          <HtmlLogo width={64} height={64} />
          <JsLogo width={64} height={64} />
          <ReactLogo width={64} height={64} />
          <NodeLogo width={64} height={64} />
          <ExpressLogo width={64} height={64} />
          <NextLogo width={64} height={64} />
          <FirebaseLogo width={64} height={64} />
          <MongoLogo width={64} height={64} />{' '}
          <PostgresqlLogo width={64} height={64} />
          <JavaLogo width={64} height={64} />
          <PythonLogo width={64} height={64} />
        </div>
      </div>
    </div>
  )
}

export default Techstack
