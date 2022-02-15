<script>
                       
                       document.querySelector(".btn_minus").setAttribute("disabled", "disabled");
                        var valueCount

                        var price = document.getElementById("price").innerText;
                        function priceTotal()
                        {
                            var total = valueCount * price;
                            document.getElementById("price").innerHTML = total
                        }

                        

                        document.querySelector(".btn_plus").addEventListener("click", function()
                        {
                            valueCount = document.getElementById("quantity").value;

                            valueCount++;
                            document.getElementById("quantity").value = valueCount

                            if (valueCount >1) {
                                document.querySelector(".btn_minus").removeAttribute("disabled");
                                document.querySelector(".btn_minus").classList.remove("disabled")
                            }
                            priceTotal()
                        })

                        document.querySelector(".btn_minus").addEventListener("click", function()
                        {
                            valueCount = document.getElementById("quantity").value;

                            valueCount--;
                            document.getElementById("quantity").value = valueCount

                            if(valueCount ==6)
                            {
                                document.querySelector(".btn_minus").setAttribute("disabled","disabled")
                            }

                            priceTotal()
                        })

                      
                    </script>