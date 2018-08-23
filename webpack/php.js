// module.exports = function() {
//   return {
//     module: {
//       rules: [
//         {
//           test: /\.php$/,
//           use: [{
//             loader: 'html-minify',
//             options: {
//               name: 'libs/jquery.form-sender/[name].[ext]'
//             }
//           },{
//             loader: 'php-loader',
//             options: {
//               name: 'libs/jquery.form-sender/[name].[ext]'
//             }
//           }]
//         },
//       ],
//     },
//   };
// };

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.php$/,
          loader: 'file-loader',
          options: {
            name: './libs/jquery.form-sender/[name].[ext]'
          },
        },
      ],
    },
  };
};