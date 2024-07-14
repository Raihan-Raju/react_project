<!-- <pre> -->
<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');

$con = new mysqli('localhost', 'root', '', 'sadaka');

$user = $con->query('select * from users')->fetch_all(MYSQLI_ASSOC);
// print_r($user) ;
?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div>
                <h1 class="bg-primary text-center p-3 text-white">User data List</h1> <hr>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Password</th>
                        <th>Photo</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach($user as $i => $u): ?> 
                        <tr>
                            <td><?php echo ++$i; ?></td>
                            <td><?php echo $u['phone']; ?></td>
                            <td><?php echo $u['email']; ?></td>
                            <td><?php echo $u['username']; ?></td>
                            <td><?php echo $u['address']; ?></td>
                            <td><?php echo $u['password']; ?></td>
                            <td><?php echo $u['photo']; ?></td>
                            <td>
                                <a href="edit.php?id=<?php echo $u['id']; ?>" class="btn btn-info">Edit</a>
                                <a href="delete.php?id=<?php echo $u['id']; ?>" class="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>
