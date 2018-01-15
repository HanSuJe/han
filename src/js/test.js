private void initDatas() {

    //获取系统  秒
    Calendar calendar = Calendar.getInstance();
    String haomia = calendar.getTimeInMillis() / 1000 + "";

    //用HashMap获取要传的参数，参数也包括上面获取的是系统时间
    HashMap < String, String > map = new HashMap < String, String > ();
    map.put("user_uuid", "001");
    map.put("token", "001");
    map.put("timestamp", haomia);

    //对HashMap排序
    List < Map.Entry < String, String >> infoIds =
        new ArrayList < Map.Entry < String, String >> (map.entrySet());

    //排序
    Collections.sort(infoIds, new Comparator < Map.Entry < String, String >> () {
        public int compare(Map.Entry < String, String > o1, Map.Entry < String, String > o2) {
            //return (o2.getValue() - o1.getValue());
            return (o1.getKey()).toString().compareTo(o2.getKey());
        }
    });


    StringBuilder s5 = new StringBuilder("");
    String signature = "";

    //排序后
    for (int i = 0; i < infoIds.size(); i++) {
        String id = infoIds.get(i).toString();

        if (i < infoIds.size() - 1) {
            s5.append(infoIds.get(i) + "&");
        } else {
            s5.append(infoIds.get(i) + "");
        }
    }

    //MD5加密（秘钥+上面转换成的字符串），加密完事以后转换成大写
    signature = (MD5Util.md5(HttpConfig.secret + s5.toString())).toUpperCase();

    //        OkGo.get("http://39.106.190.128/v1/user/users")
    //                .headers("signature",signature)///请求头 
    //                .headers("timestamp",haomia)///请求头 秒
    //                .params("user_uuid","001")
    //                .params("token","001")
    //                .execute(new StringCallback() {
    //                             @Override
    //                             public void onSuccess(String s, Call call, Response response) {
    //                                 Log.e("---sujd---22-成功>", s);
    //                             }
    //
    //                             @Override
    //                             public void onError(Call call, Response response, Exception e) {
    //                                 Log.e("---sujd---22-失败>", "3423");
    //                                  }
    //                         }
    //                );
}
