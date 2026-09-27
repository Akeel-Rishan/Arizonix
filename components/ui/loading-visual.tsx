import Image from 'next/image';

export function LoadingVisual() {
  return (
    <div className="route-loader-visual">
      <div aria-hidden="true" className="route-loader-emblem">
        <span className="route-loader-orbit" />
        <span className="route-loader-orbit-dot" />
        <span className="route-loader-logo">
          <Image
            alt=""
            height={56}
            priority
            src="/images/arizonix-icon-logo-transparent-v2.png"
            width={56}
          />
        </span>
      </div>
      <div className="route-loader-copy">
        <span>Arizonix</span>
        <small>Engineering your next experience</small>
      </div>
      <span aria-hidden="true" className="route-loader-track">
        <span />
      </span>
    </div>
  );
}
