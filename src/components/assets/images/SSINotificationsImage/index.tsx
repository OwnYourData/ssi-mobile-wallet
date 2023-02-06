import { FC } from 'react'
import { View, ViewStyle } from 'react-native'
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg'

export interface IProps {
  height?: number,
  width?: number
  style?: ViewStyle
}

const SSINotificationsImage: FC<IProps> = (props: IProps): JSX.Element => {
  const { style, height = 141, width = 181 } = props

  return (
    <View style={[style, { height, width }]}>
      <Svg width="100%" height="100%" viewBox="0 0 181 141" fill="none">
        <G clip-path="url(#clip0_2439_24983)">
          <Path d="M71.4358 37.4211C71.3525 37.5916 71.2829 37.7683 71.2275 37.9497L54.9534 42.8551L51.9402 40.0315L47.085 44.0225L51.9336 49.5395C52.3253 49.9852 52.851 50.2918 53.4317 50.4133C54.0125 50.5348 54.617 50.4645 55.1545 50.2132L72.6713 42.021C73.2804 42.4245 73.9978 42.633 74.7283 42.6187C75.4587 42.6045 76.1675 42.3681 76.7604 41.9412C77.3533 41.5142 77.8021 40.9168 78.0472 40.2285C78.2923 39.5402 78.3221 38.7936 78.1326 38.088C77.943 37.3823 77.5432 36.7511 76.9862 36.2783C76.4292 35.8055 75.7415 35.5134 75.0145 35.441C74.2875 35.3687 73.5557 35.5193 72.9164 35.873C72.2772 36.2267 71.7607 36.7667 71.4358 37.4211L71.4358 37.4211Z" fill="#FFB6B6"/>
          <Path d="M54.4132 43.0532L48.4259 48.0363C48.2555 48.1781 48.0566 48.2815 47.8427 48.3395C47.6288 48.3975 47.4049 48.4086 47.1862 48.3723C46.9676 48.3359 46.7594 48.2528 46.5757 48.1287C46.3921 48.0046 46.2374 47.8424 46.1221 47.6531L42.0829 41.0197C41.3631 40.1439 41.0198 39.0183 41.1283 37.8898C41.2368 36.7613 41.7882 35.7218 42.6617 34.9991C43.5352 34.2765 44.6595 33.9296 45.7882 34.0345C46.917 34.1394 47.9581 34.6875 48.6835 35.5588L54.4548 40.7179C54.62 40.8657 54.7514 41.0473 54.8401 41.2504C54.9287 41.4536 54.9726 41.6734 54.9686 41.8951C54.9647 42.1167 54.913 42.3348 54.8172 42.5347C54.7213 42.7345 54.5835 42.9114 54.4132 43.0532Z" fill="#3F3D56"/>
          <Path d="M70.4916 126.022L73.0976 124.362C73.2173 122.904 73.2547 121.441 73.2097 119.979L71.8578 120.324L73.1921 119.474C73.1184 117.667 72.9552 116.475 72.9552 116.475C72.9552 116.475 67.6861 119.898 64.3256 124.538L64.8987 128.461L63.532 125.717C63.1825 126.277 62.8685 126.858 62.5919 127.457C59.8231 133.506 59.5541 139.315 61.991 140.43C64.4278 141.546 68.6478 137.546 71.4166 131.497C72.2517 129.551 72.7838 127.489 72.9942 125.383L70.4916 126.022Z" fill="#E6E6E6"/>
          <Path d="M75.8446 131.861L78.9337 131.787C79.7895 130.601 80.5778 129.368 81.2948 128.093L79.959 127.69L81.5406 127.652C82.4116 126.067 82.888 124.962 82.888 124.962C82.888 124.962 76.6082 125.168 71.3335 127.403L69.796 131.058L70.0444 128.002C69.456 128.301 68.8868 128.636 68.3404 129.006C62.8436 132.753 59.6113 137.586 61.1208 139.801C62.6303 142.015 68.31 140.773 73.8067 137.026C75.5272 135.792 77.0485 134.302 78.3175 132.607L75.8446 131.861Z" fill="#E6E6E6"/>
          <Path d="M57.5877 137.317L60.9602 137.316L62.2253 124.198L57.5872 124.308L57.5877 137.317Z" fill="#FFB6B6"/>
          <Path d="M56.7275 136.215L63.3691 136.215H63.3693C64.4918 136.215 65.5683 136.661 66.3621 137.455C67.1558 138.248 67.6018 139.325 67.6019 140.448V140.585L56.7277 140.586L56.7275 136.215Z" fill="#757B93"/>
          <Path d="M17.801 127.581L20.0129 130.126L30.8846 122.806L27.62 119.048L17.801 127.581Z" fill="#FFB6B6"/>
          <Path d="M18.0681 126.209L22.4242 131.223L22.4244 131.223C23.1605 132.071 23.5299 133.176 23.4513 134.296C23.3727 135.415 22.8526 136.458 22.0053 137.195L21.9015 137.285L14.7693 129.076L18.0681 126.209Z" fill="#757B93"/>
          <Path d="M0.327511 141H92.285C92.3719 141 92.4552 140.966 92.5166 140.904C92.578 140.843 92.6125 140.76 92.6125 140.673C92.6125 140.586 92.578 140.503 92.5166 140.441C92.4552 140.38 92.3719 140.345 92.285 140.345H0.327511C0.284418 140.345 0.241722 140.353 0.201875 140.37C0.162027 140.386 0.12581 140.41 0.0952946 140.441C0.0647796 140.471 0.0405678 140.507 0.0240482 140.547C0.00752867 140.587 -0.000976562 140.63 -0.000976562 140.673C-0.000976562 140.716 0.00752867 140.759 0.0240482 140.798C0.0405678 140.838 0.0647796 140.874 0.0952946 140.905C0.12581 140.935 0.162027 140.959 0.201875 140.976C0.241722 140.992 0.284418 141.001 0.327511 141Z" fill="#CACACA"/>
          <Path d="M50.1783 106.436L57.2739 132.726H62.7755L61.5671 103.974L58.3776 75.9609L46.7925 75.3452L50.1783 106.436Z" fill="#FF9900"/>
          <Path d="M37.8661 75.9604C37.8661 75.9604 37.2505 79.9623 39.713 84.272C42.1754 88.5817 40.6364 103.05 40.6364 103.05L19.863 123.922C19.863 123.922 23.0915 129.524 24.6305 129.216C26.1695 128.908 50.4861 109.207 50.4861 109.207L58.3776 77.1918L37.8661 75.9604Z" fill="#FF9900"/>
          <Path d="M49.3203 29.3601C53.2302 29.3601 56.3998 26.1902 56.3998 22.2799C56.3998 18.3696 53.2302 15.1997 49.3203 15.1997C45.4103 15.1997 42.2407 18.3696 42.2407 22.2799C42.2407 26.1902 45.4103 29.3601 49.3203 29.3601Z" fill="#FFB6B6"/>
          <Path d="M49.0215 33.4126C49.0215 33.4126 40.7691 30.2882 40.7691 31.2117C40.7691 32.1352 32.6335 39.9438 34.4803 50.1024C36.3271 60.2609 38.4818 65.1862 37.5583 70.7273C36.6349 76.2683 37.2505 77.4996 37.2505 77.4996C37.2505 77.4996 58.6854 79.3466 58.9932 77.1918C59.301 75.0369 58.0991 71.7505 58.0991 70.827C58.0991 69.9035 49.5939 35.7891 49.0215 33.4126Z" fill="#3F3D56"/>
          <Path d="M46.1161 26.534C46.6893 26.231 47.355 26.1685 47.9754 25.9801C50.1948 25.3062 51.6816 22.797 51.2069 20.5264C51.1192 20.2352 51.0798 19.9316 51.0903 19.6276C51.1733 18.9551 51.8614 18.5212 52.5211 18.3671C53.1809 18.213 53.8829 18.2354 54.5135 17.9876C55.4871 17.6051 56.1339 16.6044 56.2741 15.5676C56.3748 14.518 56.1411 13.4634 55.6064 12.5547L55.3681 13.2405C55.0046 12.9328 54.7348 12.5292 54.5894 12.0758C54.3186 12.1213 54.0639 12.2356 53.8499 12.4077C53.6359 12.5798 53.4697 12.804 53.3671 13.0588C52.9846 13.2844 52.9294 12.358 52.5069 12.2213C52.3211 12.1981 52.1332 12.2444 51.9795 12.3514C51.1281 12.7485 50.1389 12.409 49.2255 12.1888C47.644 11.8094 45.9954 11.8075 44.4129 12.1832C43.3616 12.4339 42.321 12.8706 41.5687 13.6467C40.9803 14.3148 40.5284 15.0916 40.2382 15.9332C39.4313 17.964 38.8983 20.1614 39.1647 22.3304C39.3865 24.1053 40.129 25.7747 41.2984 27.1281C41.9076 27.8301 43.8953 30.2791 44.9851 29.8615C46.3545 29.3369 44.5026 27.3872 46.1161 26.534Z" fill="#757B93"/>
          <Path opacity="0.2" d="M58.1255 87.9493L50.0256 109.188L50.4349 109.345L58.5347 88.1053L58.1255 87.9493Z" fill="black"/>
          <Path d="M75.611 34.2383C75.0957 34.2389 74.6017 34.4439 74.2374 34.8082C73.8731 35.1726 73.6681 35.6667 73.6675 36.182V57.7893C73.6681 58.3046 73.8731 58.7987 74.2374 59.1631C74.6017 59.5274 75.0957 59.7324 75.611 59.733H179.056C179.572 59.7324 180.066 59.5274 180.43 59.1631C180.794 58.7987 180.999 58.3046 181 57.7893V36.182C180.999 35.6667 180.794 35.1726 180.43 34.8083C180.066 34.4439 179.572 34.2389 179.056 34.2383L75.611 34.2383Z" fill="#E6E6E6"/>
          <Path d="M76.3099 35.7539C76.0111 35.7542 75.7247 35.873 75.5134 36.0843C75.3021 36.2956 75.1832 36.582 75.1829 36.8808V57.0904C75.1832 57.3892 75.3021 57.6756 75.5134 57.8869C75.7246 58.0982 76.0111 58.217 76.3099 58.2173H178.358C178.656 58.217 178.943 58.0982 179.154 57.8869C179.365 57.6756 179.484 57.3891 179.484 57.0904V36.8808C179.484 36.5821 179.365 36.2956 179.154 36.0843C178.943 35.8731 178.656 35.7542 178.358 35.7539H76.3099Z" fill="white"/>
          <Path d="M171.95 52.6758C172.435 52.6746 172.899 52.4815 173.241 52.1388C173.584 51.7961 173.776 51.3316 173.777 50.8472C173.777 50.3628 173.586 49.8979 173.245 49.5542C172.903 49.2105 172.44 49.0162 171.955 49.0137C171.954 49.0137 171.952 49.0137 171.95 49.0137H85.636C85.1517 49.0156 84.6879 49.2094 84.3461 49.5526C84.0044 49.8958 83.8125 50.3604 83.8125 50.8448C83.8125 51.3291 84.0044 51.7937 84.3461 52.1369C84.6879 52.4801 85.1517 52.6739 85.636 52.6758H171.95Z" fill="#E6E6E6"/>
          <Path d="M122.777 44.7208C123.018 44.7211 123.256 44.6739 123.479 44.582C123.701 44.4901 123.903 44.3553 124.073 44.1852C124.244 44.0152 124.379 43.8132 124.471 43.5909C124.563 43.3686 124.61 43.1303 124.61 42.8897C124.61 42.649 124.563 42.4107 124.471 42.1884C124.379 41.9661 124.244 41.7642 124.073 41.5941C123.903 41.4241 123.701 41.2892 123.479 41.1973C123.256 41.1054 123.018 41.0583 122.777 41.0586H85.6359C85.3953 41.0583 85.1569 41.1054 84.9346 41.1973C84.7122 41.2892 84.5101 41.4241 84.3398 41.5941C84.1695 41.7642 84.0345 41.9661 83.9423 42.1884C83.8502 42.4107 83.8027 42.649 83.8027 42.8897C83.8027 43.1303 83.8502 43.3686 83.9423 43.5909C84.0345 43.8132 84.1695 44.0152 84.3398 44.1852C84.5101 44.3553 84.7122 44.4901 84.9346 44.582C85.1569 44.6739 85.3953 44.7211 85.6359 44.7208H122.777Z" fill="#6C63FF"/>
          <Path d="M90.7301 75.9292C90.3655 75.9296 90.0159 76.0747 89.7581 76.3326C89.5002 76.5904 89.3552 76.94 89.3547 77.3047V92.5959C89.3552 92.9606 89.5002 93.3102 89.7581 93.5681C90.0159 93.826 90.3655 93.971 90.7301 93.9715H163.937C164.302 93.971 164.651 93.826 164.909 93.5681C165.167 93.3102 165.312 92.9606 165.312 92.5959V77.3047C165.312 76.94 165.167 76.5904 164.909 76.3326C164.651 76.0747 164.302 75.9296 163.937 75.9292H90.7301Z" fill="#E6E6E6"/>
          <Path d="M91.2248 77.002C91.0134 77.0022 90.8107 77.0863 90.6611 77.2358C90.5116 77.3853 90.4275 77.588 90.4272 77.7995V92.1015C90.4275 92.3129 90.5116 92.5157 90.6611 92.6652C90.8107 92.8147 91.0134 92.8988 91.2248 92.899H163.443C163.654 92.8988 163.857 92.8147 164.006 92.6651C164.156 92.5156 164.24 92.3129 164.24 92.1015V77.7995C164.24 77.588 164.156 77.3853 164.006 77.2358C163.857 77.0863 163.654 77.0022 163.443 77.002H91.2248Z" fill="white"/>
          <Path d="M158.908 88.9769C159.252 88.9772 159.581 88.841 159.825 88.5984C160.068 88.3557 160.205 88.0264 160.205 87.6828C160.206 87.3393 160.07 87.0096 159.827 86.7663C159.585 86.523 159.255 86.3859 158.912 86.3853C158.911 86.3853 158.91 86.3853 158.908 86.3853H97.8248C97.4815 86.3858 97.1524 86.5225 96.9098 86.7655C96.6673 87.0084 96.531 87.3377 96.531 87.6811C96.531 88.0244 96.6673 88.3537 96.9098 88.5967C97.1524 88.8397 97.4815 88.9764 97.8248 88.9769H158.908Z" fill="#E6E6E6"/>
          <Path d="M124.109 83.3475C124.279 83.3478 124.448 83.3145 124.606 83.2494C124.763 83.1844 124.906 83.089 125.027 82.9687C125.147 82.8483 125.243 82.7054 125.308 82.548C125.373 82.3907 125.407 82.222 125.407 82.0517C125.407 81.8814 125.373 81.7127 125.308 81.5554C125.243 81.398 125.147 81.2551 125.027 81.1347C124.906 81.0144 124.763 80.919 124.606 80.854C124.448 80.789 124.279 80.7556 124.109 80.7559H97.8247C97.6544 80.7556 97.4857 80.789 97.3283 80.854C97.1708 80.919 97.0278 81.0144 96.9073 81.1347C96.7867 81.2551 96.6911 81.398 96.6259 81.5554C96.5607 81.7127 96.5271 81.8814 96.5271 82.0517C96.5271 82.222 96.5607 82.3907 96.6259 82.548C96.6911 82.7054 96.7867 82.8483 96.9073 82.9687C97.0278 83.089 97.1708 83.1844 97.3283 83.2494C97.4857 83.3145 97.6544 83.3478 97.8247 83.3475H124.109Z" fill="#E4E4E4"/>
          <Path d="M90.7301 0C90.3655 0.000428111 90.0159 0.145487 89.7581 0.403356C89.5002 0.661225 89.3552 1.01085 89.3547 1.37553V16.6667C89.3552 17.0314 89.5002 17.381 89.7581 17.6389C90.0159 17.8968 90.3655 18.0418 90.7301 18.0423H163.937C164.302 18.0418 164.651 17.8968 164.909 17.6389C165.167 17.381 165.312 17.0314 165.312 16.6667V1.37553C165.312 1.01085 165.167 0.661225 164.909 0.403356C164.651 0.145487 164.302 0.000428111 163.937 0H90.7301Z" fill="#E6E6E6"/>
          <Path d="M91.2248 1.07275C91.0134 1.07297 90.8107 1.15705 90.6611 1.30656C90.5116 1.45607 90.4275 1.6588 90.4272 1.87027V16.1723C90.4275 16.3837 90.5116 16.5865 90.6611 16.736C90.8107 16.8855 91.0134 16.9696 91.2248 16.9698H163.443C163.654 16.9696 163.857 16.8855 164.006 16.7359C164.156 16.5864 164.24 16.3837 164.24 16.1723V1.87027C164.24 1.65883 164.156 1.45612 164.006 1.3066C163.857 1.15708 163.654 1.07298 163.443 1.07275H91.2248Z" fill="white"/>
          <Path d="M158.908 13.0477C159.252 13.048 159.581 12.9118 159.825 12.6692C160.068 12.4265 160.205 12.0972 160.205 11.7536C160.206 11.4101 160.07 11.0804 159.827 10.8371C159.585 10.5938 159.255 10.4567 158.912 10.4561C158.911 10.4561 158.91 10.4561 158.908 10.4561H97.8248C97.4815 10.4566 97.1524 10.5933 96.9098 10.8363C96.6673 11.0792 96.531 11.4085 96.531 11.7519C96.531 12.0952 96.6673 12.4246 96.9098 12.6675C97.1524 12.9105 97.4815 13.0472 97.8248 13.0477H158.908Z" fill="#E6E6E6"/>
          <Path d="M124.109 7.41784C124.279 7.41809 124.448 7.38475 124.606 7.31974C124.763 7.25473 124.906 7.15932 125.027 7.03897C125.147 6.91862 125.243 6.77568 125.308 6.61834C125.373 6.461 125.407 6.29234 125.407 6.12201C125.407 5.95168 125.373 5.78302 125.308 5.62567C125.243 5.46833 125.147 5.3254 125.027 5.20504C124.906 5.08469 124.763 4.98928 124.606 4.92427C124.448 4.85926 124.279 4.82593 124.109 4.82617H97.8247C97.6544 4.82593 97.4857 4.85926 97.3283 4.92427C97.1708 4.98928 97.0278 5.08469 96.9073 5.20504C96.7867 5.3254 96.6911 5.46833 96.6259 5.62567C96.5607 5.78302 96.5271 5.95168 96.5271 6.12201C96.5271 6.29234 96.5607 6.461 96.6259 6.61834C96.6911 6.77568 96.7867 6.91862 96.9073 7.03897C97.0278 7.15932 97.1708 7.25473 97.3283 7.31974C97.4857 7.38475 97.6544 7.41809 97.8247 7.41784H124.109Z" fill="#E4E4E4"/>
          <Path d="M69.1707 49.8253C69.0338 49.9565 68.9074 50.0983 68.7928 50.2494L51.826 49.2343L49.9727 45.5439L44.0383 47.6132L46.6843 54.4651C46.8981 55.0186 47.2856 55.4879 47.7887 55.8024C48.2919 56.1169 48.8834 56.2597 49.4746 56.2094L68.7424 54.5689C69.1747 55.1579 69.7761 55.6013 70.4666 55.8401C71.157 56.0789 71.9038 56.1019 72.6076 55.9058C73.3114 55.7098 73.9389 55.3042 74.4065 54.7428C74.8742 54.1815 75.1599 53.491 75.2256 52.7633C75.2913 52.0356 75.1339 51.3052 74.7744 50.6691C74.4149 50.0331 73.8703 49.5215 73.213 49.2026C72.5557 48.8836 71.8168 48.7724 71.0948 48.8836C70.3727 48.9948 69.7016 49.3233 69.1707 49.8253L69.1707 49.8253Z" fill="#FFB6B6"/>
          <Path d="M51.2504 49.234L43.911 51.8436C43.7022 51.9178 43.4798 51.9462 43.259 51.9267C43.0382 51.9073 42.8242 51.8404 42.6316 51.7308C42.439 51.6212 42.2722 51.4714 42.1427 51.2915C42.0132 51.1116 41.924 50.9059 41.8812 50.6884L40.3802 43.0683C40.0072 41.9978 40.0736 40.8231 40.5651 39.8016C41.0565 38.78 41.9328 37.9949 43.0019 37.6183C44.071 37.2417 45.2459 37.3043 46.2689 37.7923C47.292 38.2804 48.08 39.1541 48.4601 40.2221L52.0956 47.0567C52.1996 47.2524 52.2602 47.4683 52.2733 47.6895C52.2864 47.9108 52.2517 48.1323 52.1715 48.3389C52.0913 48.5455 51.9675 48.7324 51.8085 48.8869C51.6496 49.0414 51.4592 49.1598 51.2504 49.234H51.2504Z" fill="#3F3D56"/>
          <Path d="M76.4698 41.1607C79.0525 41.1607 81.1462 39.0669 81.1462 36.4839C81.1462 33.901 79.0525 31.8071 76.4698 31.8071C73.8871 31.8071 71.7935 33.901 71.7935 36.4839C71.7935 39.0669 73.8871 41.1607 76.4698 41.1607Z" fill="#6C63FF"/>
        </G>
        <Defs>
          <ClipPath id="clip0_2439_24983">
            <Rect width="181" height="141" fill="white"/>
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}

export default SSINotificationsImage
