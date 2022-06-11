import { useMessageHandling } from "../../context/message-handling";
import "../../styles.css";

export function ShareProduct({ close, productLink }) {
  const shareIcons = [
    {
      title: "Whatsapp",
      icon: "/assets/whatsapp.png",
      url: `https://wa.me?text=I'm in love with this delicious desert from Cakery - ${productLink}`,
    },
    {
      title: "Twitter",
      icon: "/assets/twitter.png",
      url: `https://twitter.com/intent/tweet?url=${productLink}&text=Check this out!`,
    },
    {
      title: "Email",
      icon: "/assets/email.png",
      url: `mailto:?subject=Check this out!&body=I'm in love with this new desert from Cakery - ${productLink}`,
    },
    {
      title: "Facebook",
      icon: "/assets/facebook.png",
      url: `https://www.facebook.com/sharer/sharer.php?u=${productLink}`,
    },
  ];
  const { showSnackbar } = useMessageHandling();
  function copyLinkToClipboard(event) {
    event.preventDefault();
    navigator.clipboard.writeText(productLink);
    showSnackbar("Copied to clipboard!");
  }

  return (
    <div className="dialog-window">
      <div className="dialog-box share-dialog">
        <div className="dialog-header share-dialog-header">
          <h3 className="heading h3">Share</h3>
          <i className="material-icons btn-icon" onClick={close}>
            close
          </i>
        </div>
        <div className="dialog-body">
          <div className="product-url-copy">
            <input
              className="input-outline w-100"
              type="text"
              autoComplete="off"
              name="product-url"
              placeholder="Product URL"
              disabled
              value={productLink}
              id=""
            />
          </div>
        </div>
        <div className="product-share-icons">
          {shareIcons.map((item) => (
            <div
              onClick={(event) => {
                event.preventDefault();
                window.open(item.url);
              }}
              target="_blank"
              rel="noopener noreferrer"
              data-action="share/whatsapp/share"
              title={item.title}
              key={item.title}
              className="txt-center"
            >
              <img src={item.icon} alt={`Share on ${item.title}`} />
              <p className=" txt-sm txt txt-gray">{item.title}</p>
            </div>
          ))}
          <div className="txt-center" onClick={copyLinkToClipboard}>
            <img src="/assets/link.png" alt="Copy link" />
            <p className=" txt-sm txt txt-gray">Copy link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
