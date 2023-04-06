import './Loader.scss';

type LoaderProps = {
 backgroundColor: string
}

export default function Loader({ backgroundColor }: LoaderProps) {
 return <>
  <div className="loader-1" style={{ background: backgroundColor }}>
   <div className="loader-2"></div>
  </div>
 </>
}
